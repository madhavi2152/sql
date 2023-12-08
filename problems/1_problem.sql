use ipl;
show tables;
select season, count(*) FROM  `match`
group by season;