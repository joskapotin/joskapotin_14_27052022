/* eslint-disable import/prefer-default-export */

/**
 * It is a helper function to fake async function
 *
 * @param {integer} stallTime - The time in milliseconds for the promise to be resolved.
 */
export async function stall(stallTime = 1000) {
  await new Promise((resolve) => {
    setTimeout(resolve, stallTime)
  })
}
