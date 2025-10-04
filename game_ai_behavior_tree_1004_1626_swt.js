// 代码生成时间: 2025-10-04 16:26:51
(function($, window, document) {

  // Define the BehaviorTreeNode class
  class BehaviorTreeNode {
    constructor() {
      this.children = [];
    }

    addChild(node) {
      this.children.push(node);
    }

    removeChild(node) {
      this.children = this.children.filter(child => child !== node);
    }

    execute() {
      // To be implemented by subclasses
      throw new Error("Method 'execute' must be implemented by subclass");
    }
  }

  // Define the SelectorNode class, which decides which child to execute
  class SelectorNode extends BehaviorTreeNode {
    execute() {
      for (const child of this.children) {
        if (child.execute()) return true;
      }
      return false;
    }
  }

  // Define the SequenceNode class, which executes children in order until one fails
  class SequenceNode extends BehaviorTreeNode {
    execute() {
      for (const child of this.children) {
        if (!child.execute()) return false;
      }
      return true;
    }
  }

  // Define the ActionNode class, which performs an action
  class ActionNode extends BehaviorTreeNode {
    constructor(action) {
      super();
      this.action = action;
    }

    execute() {
      try {
        this.action();
        return true;
      } catch (error) {
        console.error("Action failed: ", error);
        return false;
      }
    }
  }

  // Define the ConditionNode class, which checks a condition
  class ConditionNode extends BehaviorTreeNode {
    constructor(condition) {
      super();
      this.condition = condition;
    }

    execute() {
      try {
        return this.condition();
      } catch (error) {
        console.error("Condition failed: ", error);
        return false;
      }
    }
  }

  // Expose the BehaviorTree module
  window.BehaviorTree = {
    BehaviorTreeNode,
    SelectorNode,
    SequenceNode,
    ActionNode,
    ConditionNode
  };

}(jQuery, window, document));
