export default {
  REGEX: /(^|\s*):\[\[(\S+)]]:(\s|$)/gm,
  USERNAME_REGEX: /^[a-zA-Z0-9._]+$/gm,
  PASSWORD_REGEX:
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/,
};
