const makeSum = data=> data.reduce((sum, { amount }) => sum + amount, 0);

export const budgetCalculation = ({ incomes, expenses }) => {

  const totalIncomes = makeSum(incomes),
        totalExpenses = makeSum(expenses),
        totalBudget = totalIncomes - totalExpenses;

  return { totalIncomes, totalExpenses, totalBudget };
}
