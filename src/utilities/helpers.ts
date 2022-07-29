/* eslint-disable import/prefer-default-export */

/**
 * It is a helper function to fake async function
 */
export async function stall(stallTime = 1000) {
    await new Promise(resolve => {
        setTimeout(resolve, stallTime)
    })
}
