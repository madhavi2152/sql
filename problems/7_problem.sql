use ipl;
select * from deliveries;
select batsman,season,(runs*100/balls) as strikerate from
(
select batsman,season,sum(extra_runs) as runs,count(batsman) as balls from deliveries
inner join `match`
on id=match_id
group by  batsman,season) AS table1
group by batsman, season;