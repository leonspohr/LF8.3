import "./autoPage.scss";

export const ArticlePage = (props:any) => {

    return (
        <div className="page--article">
            <main>
                <Searchbar />
                <div className="article">
                    <ArticleImage
                        id={props.id}
                    />
                    <ArticleDescription />
                </div>
            </main>
        </div>
    );
