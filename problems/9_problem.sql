select * from deliveries;
select bowler, (sum(total_runs)) /(sum( case
when noball_runs=0 and wide_runs=0 then 1
else 0
end)) as economy from
(select bowler, total_runs, noball_runs, wide_runs, is_super_over from deliveries
having is_super_over=1) as table1 
group by bowler
order by economy asc
limit 1;