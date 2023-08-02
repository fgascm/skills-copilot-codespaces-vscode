function skillMembers() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/skill-members/skill-members.html',
    controller: 'SkillMembersController',
    controllerAs: 'skillMembersCtrl',
    bindToController: true,
    scope: {
      skill: '='
    }
  };
}