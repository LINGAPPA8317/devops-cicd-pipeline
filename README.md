# 🚀 DevOps CI/CD Pipeline Project

This project demonstrates a complete DevOps workflow using Jenkins, Docker, Kubernetes, and AWS EC2.

---

## 📌 Project Architecture

Developer → GitHub → Jenkins → Docker → DockerHub → Kubernetes (Minikube on EC2)

---

## 🛠️ Tools & Technologies

* Node.js Application
* Git & GitHub
* Jenkins (CI/CD)
* Docker
* DockerHub
* Kubernetes (Minikube)
* AWS EC2 (Ubuntu)

---

## ⚙️ CI/CD Pipeline Flow

1. Developer pushes code to GitHub
2. Jenkins pulls code automatically
3. Jenkins builds Docker image
4. Docker image pushed to DockerHub
5. Kubernetes deploys latest image
6. Application exposed using NodePort

---

## 🐳 Docker Commands

Build image:

```bash
docker build -t sharana1604/devops-node-app:latest .
```

Push image:

```bash
docker push sharana1604/devops-node-app:latest
```

---

## ☸️ Kubernetes Deployment

Deploy app:

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

Check status:

```bash
kubectl get pods
kubectl get svc
```

---

## 🌐 Application Access

App runs using NodePort:

```
http://<EC2_PUBLIC_IP>:30007
```

---

## 📊 Monitoring (Next Phase)

* Prometheus (setup in progress)
* Grafana (setup in progress)

---

## 📚 What I Learned

* End-to-end CI/CD pipeline setup
* Docker image creation & push
* Kubernetes deployment
* AWS EC2 infrastructure basics
* NodePort networking

---

## 👨‍💻 Author

Sharan Basava
DevOps Engineer (Learning Journey 🚀)

