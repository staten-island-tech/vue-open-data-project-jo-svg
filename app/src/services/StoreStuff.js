import {ref} from 'vue';
export const raceSelected = ref(null);
export const genderSelected = ref(null);
export function setGender(gender) {
    genderSelected.value = gender;
}
export function setRace(race) {
    raceSelected.value = race;
}
export const year = ref(2021);