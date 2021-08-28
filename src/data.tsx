export const SUBJECTS: Record<string, string> = { FYEF1: 'Mathematics' };

export const SCHOOLS: Record<
    string,
    { title: string; subjects: Record<keyof typeof SUBJECTS, number> }
> = {
    KFY: {
        title: 'Fakulta blblalba',
        subjects: {
            FYEF1: 12,
        },
    },
};
