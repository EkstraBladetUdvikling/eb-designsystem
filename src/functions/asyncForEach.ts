/**
 *
 * @param array {any[]}
 * * * typed as any, as it literally can be anything
 * @param callback {(arrayEl: any, idx: number, array: any[]) => void}
 * * * any types inherited from above
 */
export async function asyncForEach(
  array: any[],
  callback: (arrayEl: any, idx: number, array: any[]) => void
): Promise<void> {
  if (array.length) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }
}
