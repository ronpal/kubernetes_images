## gateway app
cd gateway
npm install
node server.js

## docker
docker build -t ronpal/node-gateway-app .
docker run -d -P --name gateway ronpal/node-gateway-app
docker port gateway
curl --
docker stop gateway
docker rm gateway

docker login microservices.azurecr.io
username: microservices
password: =2J==+/Yrr8/OHEjaa0U=9rBW5sKPwjv



Deployments
===========
Rolling updates and rollbacks




## Minikube
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64 && chmod +x minikube && sudo mv minikube /usr/local/bin/
brew install docker-machine-driver-xhyve
sudo chown root:wheel $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve
sudo chmod u+s $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve
minikube config set vm-driver xhyve
minikube start

## handy
docker rm $(docker ps -a -q)

#dashboard
kubectl create -f https://raw.githubusercontent.com/kubernetes/dashboard/master/src/deploy/recommended/kubernetes-dashboard.yaml
kubectl proxy

https://d33wubrfki0l68.cloudfront.net/99d9808dcbf2880a996ed50d308a186b5900cec9/40b94/docs/tutorials/kubernetes-basics/public/images/module_01_cluster.svg

