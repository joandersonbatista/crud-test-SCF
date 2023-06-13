up:
	yarn
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs --follow

scf-teste-api-logs:
	docker-compose logs --follow scf-teste-api