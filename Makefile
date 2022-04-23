include .env


.PHONY: start

start:
	sudo docker-compose up --build
	

.PHONY: stop

stop:
	sudo docker-compose down -v