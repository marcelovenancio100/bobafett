export const PERMISSIONS_MAP =
{
    new: {
        submit: {
            permittedRoles: ['ADMIN']
        }
    },
    submitted: {
        awaitingPayment: {
            permittedRoles: ['ADMIN']
        },
        awaitingApproval: {
            permittedRoles: ['ADMIN']
        },
        inSeparation: {
            permittedRoles: ['ADMIN']
        },
        sended: {
            permittedRoles: ['ADMIN']
        },
        delivered: {
            permittedRoles: ['ADMIN']
        },
        canceled: {
            permittedRoles: ['ADMIN']
        }
    },
    awaitingApproval: {
        approve: {
            permittedRoles: ['ADMIN', 'GROUP1']
        },
        cancel: {
            permittedRoles: ['ADMIN']
        }
    },
    approved: {
        reset: {
            permittedRoles: ['ADMIN']
        },
        separate: {
            permittedRoles: ['ADMIN', 'GROUP2']
        },
        cancel: {
            permittedRoles: ['ADMIN']
        }
    },
    separated: {
        send: {
            permittedRoles: ['ADMIN', 'GROUP3']
        },
        cancel: {
            permittedRoles: ['ADMIN', 'GROUP4']
        }
    },
    canceled: {
        reopen: {
            permittedRoles: ['ADMIN']
        }
    }
};