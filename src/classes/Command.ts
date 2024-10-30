export default class Command {
  /**
   * This is the command key to process its command
   */
  public key: string = "";

  /**
   * This is the description of the command to process.
   */
  public description: string = "";

  /**
   * This is the action to process when the key is pressed.
   */
  public action: CallableFunction = () => { };

  /**
   * This is the default constructor for the command object.
   *
   * @param key 
   *     This is the key to process its command.
   *
   * @param description 
   *     This is a description of the command.
   *
   * @param action
   *     This is the action to process when the key is pressed.
   */
  constructor(key: string, description: string, action: CallableFunction) {
    this.key = key;
    this.description = description;
    this.action = action;
  }

  /**
   * This function calls the action that needs to be done when
   * the command key is pressed.
   */
  public execute() {
    this.action();
  }
};
