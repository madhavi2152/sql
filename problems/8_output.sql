select * from deliveries;
select batsman, taker from
(select batsman, dismissal_kind,
case 
when dismissal_kind like "run out" then fielder
else bowler
end as taker
from deliveries
WHERE dismissal_kind NOT like "retired hurt" and dismissal_kind not like "") as table1
group by batsman, taker
order by count(taker) desc
limit 1;