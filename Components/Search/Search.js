import React from 'react'
import styles from './Search.module.css'
import { Button, Form } from 'semantic-ui-react'

function Search({ onChangeHandler, username, submitHandler }) {
  return (
    <div className={styles.searchContainer}>
      <Form onSubmit={submitHandler} className={styles.formContainer}>
        <Form.Field className={styles.searchBox}>
          <input
            value={username}
            className={styles.searchInput}
            onChange={onChangeHandler}
            placeholder="Search Username..."
          />
        </Form.Field>
        <Button className={styles.btn} type="submit">
          Ara
        </Button>
      </Form>
    </div>
  )
}

export default Search
