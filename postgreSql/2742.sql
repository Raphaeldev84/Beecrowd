SELECT l.name, ROUND(l.omega * 1.618, 3) AS "Fator N"
FROM life_registry l JOIN dimensions d 
ON l.dimensions_id = d.id WHERE d.name IN ('C875', 'C774') 
AND l.name ILIKE 'richard%' ORDER BY l.omega;