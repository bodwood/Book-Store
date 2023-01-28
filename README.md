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