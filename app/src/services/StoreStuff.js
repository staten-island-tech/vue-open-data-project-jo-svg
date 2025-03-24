import {ref} from 'vue';
export const raceSelected = ref("");
export const genderSelected = ref("");
export function setGender(gender) {
    genderSelected.value = gender;
}
export function setRace(race) {
    raceSelected.value = race;
}
