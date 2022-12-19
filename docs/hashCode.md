---
slug    : /java/hashcode
title   : 자바 hashCode
description : 
date    : 2022-12-19 13:53:19 +0900
---

# 목차
- hashing 이란? 
- 구현상의 유의점
- Java에서 hashCode

## hashing 이란?
> A hash function is any function that can be used to map data of arbitrary size to fixed-size values. The values returned by a hash function are called hash values, hash codes, digests, or simply hashes. The values are usually used to index a fixed-size table called a hash table. 

`hash function`은 임의 크기의 데이터를 고정 크기 값으로 매핑해주는 역할을 한다. 

### 왜 사용할까?
> Hash functions and their associated hash tables are used in data storage and retrieval applications to access data in a small and nearly constant time per retrieval. 

저장된 데이터에 빠르게 접근하기 위한 용도로 사용한다. 

### 유사 개념 - checksum
> A checksum is a small-sized block of data derived from another block of digital data for the purpose of detecting errors that may have been introduced during its transmission or storage.

데이터 전송시의 오류나 위변조 여부를 알아내기 위한 값을 `checksum`이라고 하며, `hash function`과는 그 목적에서 구분이 된다. 목적이 다르므로, 설계시의 고려사항도 달라지게 된다. 

### 유사 개념 - fingerprint
> In computer science, a fingerprinting algorithm is a procedure that maps an arbitrarily large data item (such as a computer file) to a much shorter bit string, its fingerprint, that uniquely identifies the original data for all practical purposes[1] just as human fingerprints uniquely identify people for practical purposes. This fingerprint may be used for data deduplication purposes. This is also referred to as file fingerprinting, data fingerprinting, or structured data fingerprinting.

`fingerprint`는 데이터를 유일하게 식별할 목적으로, 원본보다 훨씬 작은 크기의 데이터를 만드는 것을 뜻한다. 사람의 지문과 같은 개념. 

## 구현상의 유의점
### Uniformity - 결과값의 분포가 균일해야 한다
> A good hash function should map the expected inputs as evenly as possible over its output range. That is, every hash value in the output range should be generated with roughly the same probability. The reason for this last requirement is that the cost of hashing-based methods goes up sharply as the number of collisions—pairs of inputs that are mapped to the same hash value—increases.

`hash function`을 이용하는 경우는, collision이 발생했을 때, 비용이 가파르게 증가하는 경향이 있으므로, collision을 막기 위해, Uniformity 조건이 필요하다. 

### Effciency - 탐색시간과 사용공간 사이의 트레이드 오프
> In data storage and retrieval applications, the use of a hash function is a trade-off between search time and data storage space. If search time were unbounded, a very compact unordered linear list would be the best medium; if storage space were unbounded, a randomly accessible structure indexable by the key-value would be very large, very sparse, but very fast.
저장 공간을 충분히 사용해서 탐색 시간을 줄일 수도 있고, 그와는 반대로 설계할 수도 있다. 적절한 collision비율 설계를 통해, 탐색시간과 공간 사이의 균형을 잡는 것이 좋다. 

## Java에서의 `hashCode()`
> This method is supported for the benefit of hash tables such as those provided by HashMap.

hash table 과 같은 자료 구조에서 활용된다. 

> This implementation provides constant-time performance for the basic operations (get and put), assuming the hash function disperses the elements properly among the buckets. Iteration over collection views requires time proportional to the "capacity" of the HashMap instance (the number of buckets) plus its size (the number of key-value mappings). Thus, it's very important not to set the initial capacity too high (or the load factor too low) if iteration performance is important.

`hash function`이 bucket에서 요소가 균등하게 분배되도록 한다면, `get` 혹은 `put`은 상수시간 연산이 된다. 

## 참고
- hashing의 개념 - https://en.wikipedia.org/wiki/Hash_function
- checksum - https://en.wikipedia.org/wiki/Checksum
- finger print - https://en.wikipedia.org/wiki/Fingerprint_(computing)
- HashMap - https://docs.oracle.com/javase/7/docs/api/java/util/HashMap.html

