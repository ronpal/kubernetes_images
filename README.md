## docker
docker build -t ronpal/node-gateway-app .
docker run -d -P --name gateway ronpal/node-gateway-app
docker port gateway
curl --
docker stop gateway
docker rm gateway

## Minikube
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64 && chmod +x minikube && sudo mv minikube /usr/local/bin/
brew install docker-machine-driver-xhyve
sudo chown root:wheel $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve
sudo chmod u+s $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve
minikube config set vm-driver xhyve
minikube start

## handy
docker rm $(docker ps -a -q)