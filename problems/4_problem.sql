-- select * from deliveries;
-- select bowler,Round((runs*6/balls),2) as economy from(
-- select bowler, sum(total_runs) as runs, sum(case 
-- when wide_runs=0 or noball_runs =0 then 1
-- else 0
-- end) as balls
-- from deliveries
-- inner join `match`
-- on season=2015
-- group by bowler) as table1
-- order by economy desc
-- limit 10;
select bowler, (sum(runs/(balls/6))) as economy from
 (select id, season, bowler, sum(total_runs) as runs, sum(
 case
 when wide_runs=0 and noball_runs=0 then 1
 else 0
 end) as balls
 from `match` 
 inner join deliveries
 on id=match_id
 where `match`.season=2015
 group by id, season, bowler) as table1
 group by bowler
 order by economy asc
 limit 10;
 -- ) as inner_table1;
 