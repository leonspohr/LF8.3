/*
import "./articlePage.scss";
import { Searchbar } from "../Searchbar/Searchbar";
import { ArticleDescription } from "../ArticleDescription/ArticleDescription";
import { ArticleImage } from "../ArticleImage/ArticleImage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setArticlePageArticleAction } from "~/actions/ArticlePageActions";

export const ArticlePage = (props:any) => {

    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(setArticlePageArticleAction(props.id));
    }, []);

    return (
        <div className="page--article">
            <NavbarComp />
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
};
*/

export {}
