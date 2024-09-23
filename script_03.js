import users from "./users-thp.js";


// 1
const totalRevenue = users.reduce((acc, user) => acc + user.revenue, 0);
const averageRevenue = totalRevenue / users.length;
console.log("Chiffre d'affaires moyen par utilisateur :", (averageRevenue / 100).toFixed(2),"€");


// 2
const payingUsers = users.filter(user => user.revenue > 0);
const payingUsersPercentage = (payingUsers.length / users.length) * 100;
console.log("Pourcentage d'utilisateurs ayant rapporté de l'argent :", payingUsersPercentage.toFixed(2) + "%");


// 3
const averageRevenuePayingUsers = payingUsers.reduce((acc, user) => acc + user.revenue, 0) / payingUsers.length;
console.log("Chiffre d'affaires moyen des utilisateurs payants :", (averageRevenuePayingUsers / 100).toFixed(2),"€");


// 4
console.log("Chiffre d'affaires total :", totalRevenue / 100,"€");


// 5
const usersInFrance = users.filter(user => user.country === "France");
console.log("Nombre d'utilisateurs en France :", usersInFrance.length);


// 6
const payingUsersInFrance = usersInFrance.filter(user => user.revenue > 0);
console.log("Nombre de clients payants en France :", payingUsersInFrance.length);


// 7
// Chiffre d'affaires réparti dans les 4 pays les plus représentés
const countries = ['Allemagne', 'États-Unis', 'France', 'Grande-Bretagne'];
const revenueByCountry = {};
countries.forEach(country => {
  revenueByCountry[country] = users
    .filter(user => user.country === country)
    .reduce((acc, user) => acc + user.revenue, 0);
});
console.log("Chiffre d'affaires par pays :", revenueByCountry);

// 8
// Liste des pays où nous avons gagné de l'argent
const countriesWithRevenue = [...new Set(users.filter(user => user.revenue > 0).map(user => user.country))];
console.log("Pays où nous avons gagné de l'argent :", countriesWithRevenue);

// 9
// 5 utilisateurs qui nous ont rapporté le plus d'argent
const top5Users = users.sort((a, b) => b.revenue - a.revenue).slice(0, 5);
console.log("Top 5 utilisateurs par chiffre d'affaires :", top5Users);

// 10
// Gagnons-nous plus d'argent auprès des hommes ou des femmes ?
const totalRevenueBySex = users.reduce((acc, user) => {
  acc[user.sex] = (acc[user.sex] || 0) + user.revenue;
  return acc;
}, {});
const higherRevenueSex = totalRevenueBySex.M > totalRevenueBySex.F ? 'Hommes' : 'Femmes';
console.log("Les ", higherRevenueSex, "rapporttent plus.");

// 11
const usersAbove75 = users.filter(user => user.revenue >= 7500);
console.log("Utilisateurs ayant rapporté au moins 75€ :", usersAbove75.length);


// 12. Pourcentage de clients payants parmi les 100 premiers utilisateurs
const first100Users = users.slice(0, 100);
const payingFirst100Users = first100Users.filter(user => user.revenue > 0);
const percentagePayingFirst100 = (payingFirst100Users.length / first100Users.length) * 100;
console.log("Pourcentage de clients payants parmi les 100 premiers utilisateurs :", percentagePayingFirst100.toFixed(2) + "%");
