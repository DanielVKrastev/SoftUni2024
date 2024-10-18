const workforceManagement = {

  recruitStaff(name, role, experience) {
    if (role === "Developer") {
      if (experience >= 4) {
        return `${name} has been successfully recruited for the role of ${role}.`;
      } else {
        return `${name} is not suitable for this role.`;
      }
    }
    throw new Error(`We are not currently hiring for this role.`);
  },

  computeWages(hoursWorked) {
    let hourlyRate = 18;
    let totalPayment = hourlyRate * hoursWorked;

    if (typeof hoursWorked !== "number" || hoursWorked < 0) {
      throw new Error("Invalid hours");
    } else if (hoursWorked > 160) {
      totalPayment += 1500;
    }
    return totalPayment;
  },

  dismissEmployee(workforce, employeeIndex) {
    let updatedStaff = [];

    if (!Array.isArray(workforce) || !Number.isInteger(employeeIndex) || employeeIndex < 0 || employeeIndex >= workforce.length) {
      throw new Error("Invalid input");
    }
    for (let i = 0; i < workforce.length; i++) {
      if (i !== employeeIndex) {
        updatedStaff.push(workforce[i]);
      }
    }
    return updatedStaff.join(", ");
  }
};

export {
  workforceManagement
}