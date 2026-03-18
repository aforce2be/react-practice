import { atom } from 'jotai'
import { AuthUser } from '../types/auth.interface'

export const isLoggedInAtom = atom(false)
export const userAtom = atom<AuthUser | null>(null)
