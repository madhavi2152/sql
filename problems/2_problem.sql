select winner, season, count(*) from `match`
group by winner, season
order by season asc;