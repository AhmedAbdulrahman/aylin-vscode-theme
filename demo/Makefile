REPO=test
NAME=python-alpine-kafka
TAG=python3.7.3-alpine3.9-librdkafka1.0.0
IMG=$(REPO)/$(NAME):$(TAG)

build:
	docker build -t $(IMG) .
	docker tag $(IMG) $(REPO)/$(NAME):latest

run:
	docker run -it --rm $(IMG)

push: build
	docker push $(IMG)
	docker push $(REPO)/$(NAME):latest