select table1.season,table1.player_of_match,table2.maxcount FROM (select season , player_of_match,count(player_of_match) as samp from `match` group by season,player_of_match) AS table1 RIGHT JOIN
(select season, max(countp) as maxcount from(
select season, count(player_of_match) as countp, player_of_match as player from `match`
group by season,player
) AS tablel
group by season) AS table2
ON table1.season=table2.season AND table1.samp =table2.maxcount;
-- on season=season and countp=maxcount


-- group by player_of_match
-- order by season asc;-- 
