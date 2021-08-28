export const SUBJECTS = {
    FYEF1: 'Mathematics',
    G1: 'Grammar',
};

export const SCHOOLS: Record<
    string,
    { title: string; subjects: Record<keyof typeof SUBJECTS, number> }
> = {
    KFY: {
        title: 'Matfyz',
        subjects: {
            FYEF1: 12,
            G1: 1,
        },
    },
    FFKD: {
        title: 'Fakulta blblalba',
        subjects: {
            FYEF1: 1,
            G1: 100,
        },
    },
};
