export const MainPage = () => {
    let promise = fetch('http://localhost:7070/posts');
    promise
        .then(response => response.json())
        .then(result => {
            console.log(result)
            return (
                <div>
                    {
                        result.map(item => (
                            <div key={crypto.randomUUID()}>{item.content}</div>
                        ))
                    }
                </div>
            )
        });

}
