# Redis as a Database

## Run Redis using Docker

```
docker run -d -p 6379:6379 redis
```

## Get the container id using

```
docker ps
```

## Get inside the container using this command:

```
docker exec -it ${container_id} /bin/bash
```

## Run this command to execute the commands to interact with the redis

```
redis-cli
```

# Redis commads :

### For easy data

```
SET userInfo "[{name : 'om', age : '21'}]" || SET username "sarthak"
GET userInfo || GET username
DEL userInfo || DEL username
```

### For complex data

```
HSET user:100 name "John Doe" email "user@example.com" age "30"
HGET user:100 name
HGET user:100 email
```

# Redis as Queue

### Commands to push and pop from the queue

```
LPUSH => pushes from left
RPUSH => pushes from right
LPOP => pops from left in case the application needs stakc
RPOP => pops from right in case the application needs queue (preffered)
```

### Syntax

```
LPUSH ${key} "${value}"
RPUSH ${key} "${value}"
RPOP ${key}
LPOP ${key}
```

### Examples :

```
LPUSH problems "{problemId : 1, type : 'c++'}"
LPUSH problems "{problemId : 2, type : 'javascript'}"
LPUSH problems "{problemId : 3, type : 'java'}"
LPUSH problems "{problemId : 4, type : 'go'}"


Queue : ["{problemId : 4, type : 'go'}, {problemId : 3, type : 'java'}, {problemId : 2, type : 'javascript'}, {problemId : 1, type : 'c++'}"]

Queue : ["go, java, javascript, c++"]

RPOP problems (Pops c++)
Queue : ["go, java, javascript"]


LPOP problems (Pops go)
Queue : ["java, javascript"]

RPOP problems (Pops javascript)
Queue : ["java"]

RPOP problems (Pops java)
Queue : ["java"]

RPOP problems (will get nil if the queue is empty)
Queue : [] (nil)
```
