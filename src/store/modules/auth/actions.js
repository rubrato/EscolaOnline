export function signInRequest(email, password) {
    return { 
        type: '@auth/SIGN_IN_REQUEST',
        payload: { email, password }, 
    };
}

export function studentSignInRequest(id) {
    return { 
        type: '@auth/STUDENT_SIGN_IN_REQUEST',
        payload: { id }, 
    };
}

export function signInSuccess(token, user) {
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: { token, user },
    };
}

export function signUpRequest(name, email, password) {
    return {
        type: '@auth/SIGN_UP_REQUEST',
        payload: { name, email, password },
    };
}

export function signFailure() {
    return {
        type: '@auth/SIGN_FAILURE',
    }
}
