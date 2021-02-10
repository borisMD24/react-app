import WorkItem from "./item";
import {Route} from "react-router-dom";
import Default from "./default";

const Work = () => {
    const caseStudy = [
        {
            name : "Platon",
            title: "Le challenge",
            content : "Platon a décidé de se lancer à l'époque malgré une crise économique difficile. Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence."
        },
        {
            name : "Solane",
            title: "Solane est le premier vendeur de fraises du Poitou-Charentes",
            content : "Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné."
        },
        {
            name : "Sedal",
            title: "Sedal, l'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas",
            content : "Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l'ont dit, \"les derniers seront les premiers\"."      }
    ]
    const routes = caseStudy.map(item => {
        return(
        <Route path={`/work/${item.name}`}>
            <WorkItem item={item}/>
        </Route>
        );
    })
    routes.push(
        <Route exact path={`/work/`}>
            <Default array={caseStudy}/>
        </Route>
    )
    return(
    
        <div>
            {
               routes 
            }
        </div>
    );
}

export default Work;