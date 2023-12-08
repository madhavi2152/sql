-- select * from deliveries;
select season, sum(extra_runs) as runs_conceded, batting_team from `match`
iner join deliveries
on id=match_id
where season=2016
group by batting_team,season
order by runs_conceded asc;