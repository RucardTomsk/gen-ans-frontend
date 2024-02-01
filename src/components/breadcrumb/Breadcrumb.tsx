import React from "react";
import {Breadcrumb as BreadcrumbAntd} from "antd";
import {ItemType} from "antd/es/breadcrumb/Breadcrumb";
import {Links} from "../../constants/links.ts";
import {generatePath, Link, useParams} from "react-router-dom";

interface Props {
    link: string
}

interface Params {
    caseName: string,
    BOName: string,
    caseId: string,
    BOId: string
}
const Breadcrumb: React.FC<Props> = ({link}) => {

    const {caseId, boId} = useParams();

    const params: Params = {
        caseName: "Ямало-Ненецкий АО",
        BOName: "ЛУ Ушайский",
        caseId: caseId || "",
        BOId: boId || ""
    }

    return (
        <BreadcrumbAntd items={getBreadcrumbItems([], link, params)} />
    )
}

function getBreadcrumbItems(items: ItemType[], link: string, params: Params): ItemType[] {

    const item =  breadcrumbStructure.find(it => it.link === link)

    if (!item) return items;

    items.unshift({
        title:
            <Link
                to={generatePath(item.link, {caseId: params.caseId, boId: params.BOId})}
            >
                {
                    link === Links.Authorized.Case ? params.caseName :
                        link === Links.Authorized.ClassicalBOInfo ||
                        link === Links.Authorized.NonClassicalBOInfo ? params.BOName :
                            item.title
                }
            </Link>
    })

    if (item.parent) getBreadcrumbItems(items, item.parent, params)

    return items;
}

const breadcrumbStructure = [
    {
        title: "",
        link: Links.Authorized.Case,
        parent: undefined
    },
    {
        title: "",
        link: Links.Authorized.ClassicalBOInfo,
        parent: Links.Authorized.Case
    },
    {
        title: "",
        link: Links.Authorized.NonClassicalBOInfo,
        parent: Links.Authorized.Case
    },

    {
        title: "Финасово-экономическая модель",
        link: Links.Authorized.ClassicalBOFinance,
        parent: Links.Authorized.ClassicalBOInfo
    },
    {
        title: "Запасы нефти",
        link: Links.Authorized.ClassicalBOOil,
        parent: Links.Authorized.ClassicalBOInfo
    },
    {
        title: "Запасы газа и конденсата",
        link: Links.Authorized.ClassicalBOGasCondensate,
        parent: Links.Authorized.ClassicalBOInfo
    },

    {
        title: "Рентабельность",
        link: Links.Authorized.ClassicalBOProfitability,
        parent: Links.Authorized.ClassicalBOFinance
    },
    {
        title: "CAPEX",
        link: Links.Authorized.ClassicalBOCapitalExpenditures,
        parent: Links.Authorized.ClassicalBOFinance
    },
    {
        title: "OPEX",
        link: Links.Authorized.ClassicalBOOperatingExpenditures,
        parent: Links.Authorized.ClassicalBOFinance
    },

    {
        title: "Макроэкономика",
        link: Links.Authorized.ClassicalBOMacroeconomics,
        parent: Links.Authorized.ClassicalBOFinance
    },
    {
        title: "Производство",
        link: Links.Authorized.ClassicalBOProduction,
        parent: Links.Authorized.ClassicalBOFinance
    },
    {
        title: "Дебит нефти",
        link: Links.Authorized.ClassicalBOOilDebitCalculation,
        parent: Links.Authorized.ClassicalBOProduction
    },
    {
        title: "Профиль добычи нефти",
        link: Links.Authorized.ClassicalBOOilMiningCalculation,
        parent: Links.Authorized.ClassicalBOProduction
    }
]
export default Breadcrumb;