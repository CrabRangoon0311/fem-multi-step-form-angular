export type PlanInterval = "Monthly" | "Yearly";

export type Cost = {
    [key in PlanInterval]: number;
}

export type DataModel = {
    name: string;
    email: string;
    phoneNumber: string;
    planType: PlanType["id"];
    planInterval: PlanInterval;
    addons: PlanAddon["id"][];
}

export type PlanType = {
    id: Readonly<number>;
    name: string;
    cost: Cost;
}

export type PlanAddon = {
    id: Readonly<number>;
    name: string;
    desc: string;
    cost: Cost;
}

export const planTypes: PlanType[] = [
    { id: 1, name: "Arcade", cost: { Monthly: 9, Yearly: 90 } },
    { id: 2, name: "Advanced", cost: { Monthly: 12, Yearly: 120 } },
    { id: 3, name: "Pro", cost: { Monthly: 15, Yearly: 150 } },
];

export const planAddons: PlanAddon[] = [
    {
        id: 1,
        name: "Online service",
        desc: "Access to multiplayer games",
        cost: {
            Monthly: 1,
            Yearly: 10,
        }
    },
    {
        id: 2,
        name: "Larger storage",
        desc: "Extra 1TB of cloud save",
        cost: {
            Monthly: 2,
            Yearly: 20,
        }
    },
    {
        id: 3,
        name: "Customizable profile",
        desc: "Custom theme on your profile",
        cost: {
            Monthly: 2,
            Yearly: 20,
        }
    },
];