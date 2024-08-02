# @polyseam/kafkajs-logger

A simple module for logging pretty info from
[kafkajs](https://npmjs.com/kafkajs).

## usage

```typescript
import { logCreator } from '@polyseam/kafkajs-logger';
import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka1:9092', 'kafka2:9092']
  logCreator,
  logLevel: logLevel.WARN
});
```
