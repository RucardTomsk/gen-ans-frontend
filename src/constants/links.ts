
export const Links = {
    Unauthorized: {
        Login: '/login',
        Register: '/register'
    },
    Authorized: {
        Case: '/case/:caseId',

        ClassicalBOInfo: '/case/:caseId/classical-bo/:boId',
        ClassicalBOFinance: '/case/:caseId/classical-bo/:boId/finance',
        ClassicalBOOil: '/case/:caseId/classical-bo/:boId/oil',
        ClassicalBOGasCondensate: '/case/:caseId/classical-bo/:boId/gas-condensate',
        ClassicalBOProfitability: '/case/:caseId/classical-bo/:boId/profitability',
        ClassicalBOCapitalExpenditures: '/case/:caseId/classical-bo/:boId/capital-expenditures',
        ClassicalBOOperatingExpenditures: '/case/:caseId/classical-bo/:boId/operating-expenditures',
        ClassicalBOMacroeconomics: '/case/:caseId/classical-bo/:boId/macroeconomics',
        ClassicalBOProduction: '/case/:caseId/classical-bo/:boId/production',
        ClassicalBOOilDebitCalculation: '/case/:caseId/classical-bo/:boId/oil-debit-calculation',
        ClassicalBOOilMiningCalculation: '/case/:caseId/classical-bo/:boId/oil-mining-calculation',

        NonClassicalBOInfo: '/case/:caseId/non-classical-bo/:caseId'
    }
}