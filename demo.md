# Setup
Delete triggers from:
https://console.cloud.google.com/gcr/triggers?project=kubeconcph
Delete repo from:
https://console.cloud.google.com/code/develop/repo?project=kubeconcph
```
git remote remove google
kubectl delete deploy/kubedemo
```

# Manual Deploy
```
docker build . -t gcr.io/kubeconcph/democontainer:v10
docker push gcr.io/kubeconcph/democontainer:v10
kubectl apply -f k8s-deploy.yaml 
```

# Add remote & push
Create repo at:
https://console.cloud.google.com/code/develop/repo?project=kubeconcph
```
git remote add google https://source.developers.google.com/p/kubeconcph/r/kubeconcph
git push --all google
git commit --allow-empty -m "Demo"
git push google master
```

# Set image
```
kubectl set image deploy/kubedemo democontainer=
```

# Skaffold
skaffold dev


