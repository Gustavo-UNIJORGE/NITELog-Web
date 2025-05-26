export default function validateEmail(email:string) {
    return (email && /\S+@\S+\.\S+/.test(email)) as boolean;
}