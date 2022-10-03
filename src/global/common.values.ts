export default {
  REGEX: /(^|\s*):\[\[(\S+)]]:(\s|$)/gm,
  //Username must contain only letters, numbers, and underscores
  USERNAME_REGEX: /^[a-zA-Z0-9_]+$/,
  PASSWORD_REGEX:
    /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,20}$/gmu,
};
