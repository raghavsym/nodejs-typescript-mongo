import * as supertest from 'supertest'
import app from './app'

describe('app', () => {
  it('works', () =>
    supertest(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
  )
})
