export const countries = [
    'India'
];
export const technologies = [
    'Retired'
]

export const searchParamsList: { searchText: string; locationText: string }[] = countries.map((location) => {
    return technologies.map(tech => ({searchText: tech, locationText: location}))
}).flat();


export const stacks = ['warden','shopkeeper','clerk','accountant','teacher','principal','florist','retired'];