Notes

- Components can only return single items, no adjacent items are allowed
  * The following will NOT work
    ```return (<div>
                 <h2>Hello!</h2>
                </div>
               <h2>Goodbye!</h2>);
    ```
  *  * But this will work!
    ```return (<div>
                 <h2>Hello!</h2>
                </div>);
    ```

- Elements that don't have a closing tag NEED to close using />
  * <img href="" />

- Inline CSS doesn't use dashes with their characteristic, instead they use camelcase
  * <h4> style={{marginTop: 10%}}

- If we use {} we can revert back to Vanilla JS, but return must be VALUE and not a statement
  * BAD: <h1>{let x = 6}</h1>
  * GOOD: <h1>{6 + 6}</h1>