Hello HTTP Part 2
======

## save logs

* Add a route for `POST` to path of your choice.
  * If the body is an array, return the `{ length: 5 }` where 5 is length
  * If the body is an object, return an array of keys `[ foo, bar, qux ]` using `Object.keys(body)`

* Remember to update your `README.md` that describes how to use your API 

## Testing

* TDD your body parser
* Add E2E test

## Rubric

* Request Body Tests: `2pts`
* Request Body Implementation: `2pts`
* Correct return values for POST: `4pts`
* E2ETests for POST: `2pts`
