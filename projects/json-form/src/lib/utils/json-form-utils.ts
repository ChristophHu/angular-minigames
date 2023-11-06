import { Observable } from "rxjs"

export function convertArray(arr: any[], col: string, dep?: string, sort: boolean = true): any {
    if (arr) {
        let cleared: { label: string, value: string, dep: string }[] = []
        arr.forEach(el => {
            cleared.push({ label: el[col], value: el.id, dep: dep ? el[dep] : '' })
        })
        if (sort) {
            cleared = cleared.sort((obj1, obj2) => {
                if (obj1.label > obj2.label) return 1
                if (obj1.label < obj2.label) return -1
                return 0
            })
        }
        return cleared
    }
}

export function convertDependingArray(arr$: Observable<any>, col: string, dep: string, sort: boolean = true): Observable<any> {
    return new Observable((observer) => {
        arr$.subscribe({
            next: (arr) => {
                if (arr) observer.next(convertArray(arr, col, dep, sort))
                // observer.next()
            },
            error(err) {
                observer.error(err)
            },
        })
    })
}

function dependedArray(arr: any[], col: string, dep: string, sort: boolean = true): any {
    if (arr) {
        let cleared: { label: string, value: string, dep: string }[] = []
        arr.forEach(el => {
            cleared.push({ label: el[col], value: el.id, dep: el[dep] })
        })
        if (sort) {
            cleared = cleared.sort((obj1, obj2) => {
                if (obj1.label > obj2.label) return 1
                if (obj1.label < obj2.label) return -1
                return 0
            })
        }
        return cleared
    }
}

export function flatten(obj: any = {}): any {
    return Object.keys(obj || {}).reduce((acc: any, cur) => {
        if (typeof obj[cur] === 'object') {
            let a: any = flatten(obj[cur])
            acc = { ...acc, ...a}
        } else { 
            acc[cur] = obj[cur] 
        }
        return acc
    }, {})
}