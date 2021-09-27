const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refindedMoonstone: 4,
};

const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1
}

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);