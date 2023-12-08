select toss_winner, count(*) winner from `match`
where toss_winner like winner
group by toss_winner
order by winner asc;